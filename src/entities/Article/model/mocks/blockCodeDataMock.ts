import { ArticleBlockType, ArticleCodeBlock } from '../types/article';

export const blockCodeDataMock:ArticleCodeBlock = {
    id: '2',
    type: ArticleBlockType.CODE,
    code: 'const root = ReactDOM.createRoot(document.getElementById(\'root\'));\nroot.render(<h1>Hello, world!</h1>);',
};
