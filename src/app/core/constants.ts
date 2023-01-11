export interface TeacherInterface {
    phone: string,
    email: string,
    name: string,
    country: string,
    affiliation: string,
    id?: string,
}

export interface CourseInterface {
    diagnosisId: string,
    description: string,
    name: string,
    tags: string,
    teacherId: string,
    video: any,
    image: string,
    price: number,
    id?: string,
    duration: string,
    bodyParts: string
}

export interface BlogInterface {
    title: string,
    description: string,
    by: string,
    date: Date,
    tag: string,
    blogId?: string
}

export interface BlogReplyInterface {
    name: string,
    comment: string,
}