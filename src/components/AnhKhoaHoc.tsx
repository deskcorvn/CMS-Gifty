import Image from "next/image";
import { COURSE_INSTRUCTOR } from "@/lib/course-brand";
import { khoaHoc } from "@/lib/noi-dung";

export default function AnhKhoaHoc() {
  return (
    <div
      className="course-cover"
      aria-label={`Khóa học AI cùng ${khoaHoc.giangVien.ten}`}
    >
      <div className="cover-copy">
        <span>Gifty Tech</span>
        <strong>
          Giao việc.
          <br />
          Chăm khách.
          <br />
          Bài bản.
        </strong>
        <small>Khóa học thực hành</small>
      </div>
      <Image
        src={COURSE_INSTRUCTOR.portrait}
        alt={khoaHoc.giangVien.ten}
        width={1024}
        height={1536}
        sizes="(max-width: 767px) 50vw, 200px"
        className="cover-person"
        preload
      />
    </div>
  );
}
