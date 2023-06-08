import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import ArticleDetailsPage from './ArticleDetailsPage';

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Що нового в JS за 2023 рік?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '06.06.2023',
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок цього блоку',
            paragraphs: [
                'Програма, яку за традицією називають «Hello, world!», дуже проста. Вона виводить кудись фразу «Hello, world!», або іншу подібну, засобами якоїсь мови.',
                "JavaScript - це мова, програми на якій можна виконувати в різних середовищах. У нашому випадку йдеться про браузери та про серверну платформу Node.js. Якщо досі ви не написали жодного рядка коду на JS і читаєте цей текст у браузері, на настільному комп'ютері, це означає, що ви буквально за лічені секунди від своєї першої JavaScript-програми.",
                'Існують інші способи запуску JS-коду в браузері. Так, якщо говорити про звичайне використання програм JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Як правило, код оформляють у вигляді окремих файлів з розширенням .js, які підключають до веб-сторінок, але програмний код можна включати безпосередньо в код сторінки. Все це робиться за допомогою тега <script>. Коли браузер виявляє такий код, він виконує його. Подробиці про тег script можна переглянути на сайті w3school.com. Зокрема, розглянемо приклад, що демонструє роботу з веб-сторінкою засобами JavaScript, наведений цьому ресурсі. Цей приклад можна запустити і засобами даного ресурсу (шукайте кнопку Try it Yourself), але ми зробимо трохи інакше. А саме, створимо в якомусь текстовому редакторі (наприклад - в VS Code або Notepad++) новий файл, який назвемо hello.html, і додамо в нього наступний код:',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок цього блоку',
            paragraphs: [
                'Програма, яку за традицією називають «Hello, world!», дуже проста. Вона виводить кудись фразу «Hello, world!», або іншу подібну, засобами якоїсь мови.',
                'Існують інші способи запуску JS-коду в браузері. Так, якщо говорити про звичайне використання програм JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Як правило, код оформляють у вигляді окремих файлів з розширенням .js, які підключають до веб-сторінок, але програмний код можна включати безпосередньо в код сторінки. Все це робиться за допомогою тега <script>. Коли браузер виявляє такий код, він виконує його. Подробиці про тег script можна переглянути на сайті w3school.com. Зокрема, розглянемо приклад, що демонструє роботу з веб-сторінкою засобами JavaScript, наведений цьому ресурсі. Цей приклад можна запустити і засобами даного ресурсу (шукайте кнопку Try it Yourself), але ми зробимо трохи інакше. А саме, створимо в якомусь текстовому редакторі (наприклад - в VS Code або Notepad++) новий файл, який назвемо hello.html, і додамо в нього наступний код:',
            ],
        },
        {
            id: '2',
            type: ArticleBlockType.IMAGE,
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Малюнок 1 - скріншот сайту',
        },
        {
            id: '3',
            type: ArticleBlockType.CODE,
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
            id: '7',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок цього блоку',
            paragraphs: [
                "JavaScript - це мова, програми на якій можна виконувати в різних середовищах. У нашому випадку йдеться про браузери та про серверну платформу Node.js. Якщо досі ви не написали жодного рядка коду на JS і читаєте цей текст у браузері, на настільному комп'ютері, це означає, що ви буквально за лічені секунди від своєї першої JavaScript-програми.",
                'Існують інші способи запуску JS-коду в браузері. Так, якщо говорити про звичайне використання програм JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Як правило, код оформляють у вигляді окремих файлів з розширенням .js, які підключають до веб-сторінок, але програмний код можна включати безпосередньо в код сторінки. Все це робиться за допомогою тега <script>. Коли браузер виявляє такий код, він виконує його. Подробиці про тег script можна переглянути на сайті w3school.com. Зокрема, розглянемо приклад, що демонструє роботу з веб-сторінкою засобами JavaScript, наведений цьому ресурсі. Цей приклад можна запустити і засобами даного ресурсу (шукайте кнопку Try it Yourself), але ми зробимо трохи інакше. А саме, створимо в якомусь текстовому редакторі (наприклад - в VS Code або Notepad++) новий файл, який назвемо hello.html, і додамо в нього наступний код:',
            ],
        },
        {
            id: '8',
            type: ArticleBlockType.IMAGE,
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Малюнок 1 - скріншот сайту',
        },
        {
            id: '9',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок цього блоку',
            paragraphs: [
                "JavaScript - це мова, програми на якій можна виконувати в різних середовищах. У нашому випадку йдеться про браузери та про серверну платформу Node.js. Якщо досі ви не написали жодного рядка коду на JS і читаєте цей текст у браузері, на настільному комп'ютері, це означає, що ви буквально за лічені секунди від своєї першої JavaScript-програми.",
            ],
        },
    ],
};

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightArticleDetailsPage: Story = {
    args: {},
    decorators: [StoreDecorator({
        articleDetails: {
            data: article,
        },
    })],
};

export const DarkArticleDetailsPage: Story = {
    args: {},
    decorators: [StoreDecorator({
        articleDetails: {
            data: article,
        },
    }), ThemeDecorator(Theme.DARK)],
};
