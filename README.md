# Financial-intelligence-for-kids

Проект financial-intelligence-for-kids - это платформа, которая позволяет пользователям сформировать представление о
финансовой грамотности. Основная аудитория - молодежь 10 - 15 лет.

[Техническое задание](./docs/technical_requirements.md)

## Описание проекта
 - ...
 - ...

## Функционал
 - ...
 - ...

## Инструменты

- Python >= 3.9
- Django Rest Framework
- Docker
- Postgres
- NGINX
- React

# Getting Started Backend

#### В корне проекта создать .env.dev и прописать свои настройки

    DEBUG=0
    SECRET_KEY=gfhsefsbgefvasefvsefbe#$%Yfbsde
    DJANGO_ALLOWED_HOSTS=localhost 127.0.0.1 [::1]

    # Data Base
    POSTGRES_DB=имя_твоей_бд
    POSTGRES_ENGINE=django.db.backends.postgresql
    POSTGRES_USER=имя_твоего_пользователя
    POSTGRES_PASSWORD=пароль_бд
    POSTGRES_HOST=db
    POSTGRES_PORT=5432

## Getting Started with Backend for development

- ...
- ...

## Getting Started with Backend for production

#### Создай образ и запустить контейнер

    docker-compose up --build

##### Перейди по адресу

    http://localhost/api/v1/

##### Создай супер юзера

    docker exec -it sound_cloud_web bash
    python manage.py createsuperuser
    python manage.py collectstatic

##### Если нужно очистить БД

    docker-compose down -v

# Getting Started Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't
customize it when you are ready for it.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved
here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved
here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved
here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved
here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved
here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved
here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
