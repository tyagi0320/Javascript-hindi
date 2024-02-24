const course={
    courseName: "Js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

//course.courseInstructor
const {courseInstructor}=course
console.log(courseInstructor)
const {courseInstructor: a}=course
console.log(a)
const {price}=course
console.log(price)

//json:javascript object notation
//API-JSON => APIs consist data in JSON format
//json(object)
//{
//    "name": "harshit",
//   "courseName": "js in hindi",
//    "price": "free"
//}
//json(array)
//[
//    {},
//   {},
//    {}
//]
