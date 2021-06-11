export function formatRes (status: number, message: string, data: any) {
    return { status: status == 1 ? "Success": "Failed", message, data }
}