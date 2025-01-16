export type UserData = {
    fullName: string;
    email: string;
    githubUsername: string;
    // avatar is of type blobl or media source
    avatar: Blob | MediaSource;
}