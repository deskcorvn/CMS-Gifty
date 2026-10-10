import { courseSocialImage } from "@/lib/course-social-image";
import { COURSE_INSTRUCTOR, COURSE_MESSAGE } from "@/lib/course-brand";
import { khoaHoc } from "@/lib/noi-dung";

export const alt = `${COURSE_MESSAGE.title}. ${COURSE_INSTRUCTOR.displayName}, ${COURSE_INSTRUCTOR.position}; ${COURSE_INSTRUCTOR.experience}. ${khoaHoc.thoiLuongPhut} phút thực hành.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return courseSocialImage();
}
