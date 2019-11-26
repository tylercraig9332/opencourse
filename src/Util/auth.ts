
const requiredPaths = [
    'build',
    'profile'
]

export const needLogin = (paths : string[]) : boolean => {
    for (let path of paths) {
        if (requiredPaths.includes(path)) return true;
    }
    return false;
} 