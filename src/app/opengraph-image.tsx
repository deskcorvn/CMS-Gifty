import { courseSocialImage } from "@/lib/course-social-image";
import { COURSE_INSTRUCTOR } from "@/lib/course-brand";
import { khoaHoc, nhanLichHoc } from "@/lib/noi-dung";

export const alt = `AI thực chiến cho chủ doanh nghiệp. ${COURSE_INSTRUCTOR.displayName}, ${COURSE_INSTRUCTOR.position}; ${COURSE_INSTRUCTOR.experience}. ${khoaHoc.thoiLuongPhut} phút, ${nhanLichHoc()}.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return courseSocialImage();
}
