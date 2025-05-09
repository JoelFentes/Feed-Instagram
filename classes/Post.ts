// classes/Post.ts

export default class Post {
    username: string;
    avatarIndex: number;
    postIndex: number;
    numberOfLikes: string;
    numberOfComments: string;
    numberOfShares: string;
    description: string;
    isSuggested: boolean;
  
    constructor(
      username: string,
      avatarIndex: number,
      postIndex: number,
      numberOfLikes: string,
      numberOfComments: string,
      numberOfShares: string,
      description: string,
      isSuggested: boolean
    ) {
      this.username = username;
      this.avatarIndex = avatarIndex;
      this.postIndex = postIndex;
      this.numberOfLikes = numberOfLikes;
      this.numberOfComments = numberOfComments;
      this.numberOfShares = numberOfShares;
      this.description = description;
      this.isSuggested = isSuggested;
    }
  
    get avatarUrl(): string {
      return `/avatars/${this.avatarIndex}.png`; 
    }
  
    get imageUrl(): string {
      return `/posts/${this.postIndex}.png`;
    }
}
