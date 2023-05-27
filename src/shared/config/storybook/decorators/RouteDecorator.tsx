import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (story: any) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
