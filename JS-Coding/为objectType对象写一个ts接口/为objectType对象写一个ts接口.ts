let objectType = {
  title: 'Interface Design',
  created: '2021-06-05 12:30:00',
  author: {
    name: 'Author Name',
    codingSkills: ['TypeScript', 'React', 'Vue.js'],
    yearsOfExperience: 5,
  },
  isPublished: true,
  keywords: ['TypeScript', 'Interface', 'Object-Oriented Programming'],
  calculateReadTime: () => {
    // some function
  },
  relatedArticles: [
    {
      title: 'Related Article 1',
      author: 'Another Author',
      publishDate: '2021-06-05',
    },
  ],
}

interface IAuthor {
  name: string;
  codingSkills: string[];
  yearsOfExperience: number;
  id?: number; // 这是一个可选属性
}

interface IRelatedArticle {
  title: string;
  author: string;
  publishDate: string;
}

interface IArticle {
  title: string;
  created: string;
  author: IAuthor;
  isPublished: boolean;
  keywords: string[];
  calculateReadTime: () => number; // 回调函数的返回值视具体情况确定。
  relatedArticles: IRelatedArticle[];
}
