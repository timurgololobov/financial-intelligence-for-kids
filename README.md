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

## Getting Started Frontend

!!!ВАЖНО!!!
Перед клонированием репозитория убедитесь, что путь к папке не содержит пробелы!

#### Клонируй репозиторий

#### Переходи в папку frontend

#### Устанавиливай зависимости

    yarn install

#### Запуск проекта

    yarn start

### Текст для реквеста

создаем ветку
