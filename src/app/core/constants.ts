export interface TeacherInterface {
    phone: string,
    email: string,
    name: string,
    country: string,
    affiliation: string,
    id?: string,
}

export interface CourseInterface {
    diagnosisId?: string,
    description: string,
    name: string,
    tags: string,
    teacherId?: string,
    video: any[]
    image: string,
    price: number,
    id?: string,
    duration: string,
    bodyParts?: string,
    isLive: boolean
}

export interface LiveEventInterface {
    description: string,
    name: string,
    tags: string,
    teacherId?: string,
    video: any[],
    image: string,
    price: string,
    id?: string,
    duration: string,
    earlyBirdPrice: string,
    date: string,
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
    blogId: string,
    name: string,
    comment: string,
    _id?: string,
}


export enum Role {
    Admin = 'admin',
    Student = 'student',
    Teacher = 'teacher'
}