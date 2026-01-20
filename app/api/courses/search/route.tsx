import { NextResponse } from "next/server";
import courses from "../data.json";


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query')?.toLowerCase() || ''; 
  console.log(searchParams);
  console.log(query);
  const filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(query) || course.description.toLowerCase().includes(query);
  });
  return NextResponse.json(filteredCourses);
}