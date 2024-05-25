export default interface UserEntity {
    id: string,
    name: string,
    email?: string,
    username: string,
    password?: string,
    confirmPassword?: string,
    created_at: string,
    updated_at: string,
}
