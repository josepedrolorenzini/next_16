import { NextResponse } from "next/server";
import {v4 as uuidv4} from 'uuid';
import  courses  from "./data.json";

export async function GET() {
  return NextResponse.json(courses);
}



export async function POST(request: Request) {
  // const newCourse = await request.json();
  // courses.push(newCourse);
  // return NextResponse.json(newCourse, { status: 201 });
  const {title,description,level,link} = await request.json();
  const newCourse = {
    id: uuidv4(),
    title,
    description,
    level,
    link
  };
  courses.push(newCourse);

  console.log('NEW COURSE DATA:', {title,description,level,link});
  return NextResponse.json({
    message: 'Course created successfully',
    course: courses,

  }, { status: 201 });
}