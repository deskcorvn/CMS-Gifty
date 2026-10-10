-- Khóa đào tạo AI — schema Postgres (Neon). Chạy lại nhiều lần không sao: npm run db:migrate
-- Cách khớp tiền học theo PTI (deskcorvn/pti db/schema.sql): đơn CHO/THIEU/DA_DU, giao dịch khóa theo sepay_id.

create extension if not exists pgcrypto;

-- Học viên. kich_hoat_at khác null = đã được vào học (trả đủ tiền, hoặc quản trị kích hoạt tay).
create table if not exists hoc_vien (
  id              uuid primary key default gen_random_uuid(),
  email           text not null unique,
  ho_ten          text not null,
  sdt             text,
  kich_hoat_at    timestamptz,
  nguon_kich_hoat text,
  created_at      timestamptz not null default now()
);

-- Đơn học phí. Một học viên có thể có nhiều đơn (đăng ký lại khi đơn cũ còn chờ thì dùng lại đơn cũ).
create table if not exists don_hang (
  id          uuid primary key default gen_random_uuid(),
  ma          text not null unique,
  hoc_vien_id uuid not null references hoc_vien(id) on delete cascade,
  so_tien     integer not null check (so_tien > 0),
  da_nhan     integer not null default 0,
  trang_thai  text not null default 'CHO' check (trang_thai in ('CHO', 'THIEU', 'DA_DU', 'HUY')),
  ghi_chu     text,
  created_at  timestamptz not null default now(),
  paid_at     timestamptz
);
create index if not exists don_hang_hoc_vien on don_hang (hoc_vien_id);

-- Mọi giao dịch tiền vào SePay báo về, kể cả giao dịch chưa khớp được (để quản trị khớp tay).
create table if not exists giao_dich (
  id         bigserial primary key,
  sepay_id   text unique,
  tham_chieu text,
  ma_ck      text,
  so_tien    integer not null,
  noi_dung   text,
  tk_nhan    text,
  don_id     uuid references don_hang(id),
  da_khop    boolean not null default false,
  ly_do      text,
  raw        jsonb,
  thoi_gian  timestamptz not null default now()
);
create index if not exists giao_dich_tham_chieu on giao_dich (tham_chieu);

-- Link đăng nhập gửi qua email. Chỉ lưu băm SHA-256, dùng một lần.
create table if not exists ma_dang_nhap (
  token_hash  text primary key,
  hoc_vien_id uuid not null references hoc_vien(id) on delete cascade,
  het_han     timestamptz not null,
  da_dung     timestamptz,
  created_at  timestamptz not null default now()
);

-- Bước đã làm xong (buoc_id dạng "c05-b03": chặng 5, bước 3).
create table if not exists tien_do (
  hoc_vien_id uuid not null references hoc_vien(id) on delete cascade,
  buoc_id     text not null,
  xong_at     timestamptz not null default now(),
  primary key (hoc_vien_id, buoc_id)
);

-- Bốn sản phẩm học viên mang về (SP01–SP04). du_lieu là các ô của form.
create table if not exists san_pham (
  hoc_vien_id uuid not null references hoc_vien(id) on delete cascade,
  ma          text not null check (ma in ('SP01', 'SP02', 'SP03', 'SP04')),
  du_lieu     jsonb not null default '{}'::jsonb,
  cap_nhat_at timestamptz not null default now(),
  primary key (hoc_vien_id, ma)
);

-- Chứng chỉ "Hoàn thành xuất sắc". Mỗi học viên một chứng chỉ; thu hồi thì giữ dòng, ghi lý do.
create table if not exists chung_chi (
  ma            text primary key,
  hoc_vien_id   uuid not null unique references hoc_vien(id) on delete cascade,
  ho_ten        text not null,
  cap_at        timestamptz not null default now(),
  thu_hoi_at    timestamptz,
  ly_do_thu_hoi text
);

-- Cài đặt chung do quản trị bật/tắt (vd mo_khoa_hoc) và nhật ký gửi email gần nhất để chẩn đoán.
create table if not exists cai_dat (
  khoa        text primary key,
  gia_tri     jsonb not null,
  cap_nhat_at timestamptz not null default now()
);
