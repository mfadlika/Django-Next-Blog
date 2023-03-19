# Blog

# Next JS & Django Project

A personal blog using Next JS to build client-side, Django to handle the server-side and PostgreSQL to store the database.

# Run Locally

### 1. Clone repo

```
$ git clone https://github.com/mfadlika/Django-Next-Blog.git
$ cd Django-Next-Blog
$ cd server
$ pip install -r requirements.txt
$ cd ../client
$ npm install
```

### 2. Setup Database

- With PostgreSQL
    - Create .env file in the root of server folder and set your database password there:
      ```
      # server/.env
      export DB_PASSWORD = 'YOUR_DATABASE_PASSWORD'
      ```
    - Make sure you put your .env file in your .gitignore for security reason
    - In server/blog/settings.py, set your database:
      ```
      # server/blog/settings.py
      from dotenv import load_dotenv
      import os

      load_dotenv()

      DATABASES = { 'default': {
              'ENGINE': 'django.db.backends.postgresql',
              'NAME': 'YOUR-DATABASE-NAME', 
              'USER': 'YOUR-USER-DATABASE-NAME',
              'PASSWORD': os.environ.get('DB_PASSWORD'),
              'HOST': 'YOUR-DATABASE-HOST', 
              'PORT': 'YOUR-DATABASE-PORT',
          }
      }
      ```
    - Migrate your database:
      ```
      $ python3 manage.py makemigrations
      $ python3 manage.py migrate
      ```

### 3. Integrating Django with Next JS

- Set up your settings.py
  - Open your settings.py in server/blog folder
  - Put 'corsheaders' in your INSTALLED_APPS
  - Set CORS_ORIGIN_ALLOW ALL and CORS_ALLOW_CREDENTIALS to True and other few settings:
    ```
    # server/blog/settings.py
    CORS_ORIGIN_ALLOW_ALL = True

    CORS_ALLOW_CREDENTIALS = True

    CORS_ALLOW_HEADERS = [
      "content-type",
      "X-CSRFToken"
    ]

    CORS_EXPOSE_HEADERS =[
      "content-type",
      "X-CSRFToken"
    ]

    # Insert your domain here for Django accepting your CSRF Token
    CSRF_TRUSTED_ORIGINS = ['http://your-domain.com/csrf']
    ```
- Create API url and views to pass your CSRF Token to Next JS:
  ```
  # server/account/views.py
  from django.http import JsonResponse
  from django.middleware.csrf import get_token

  #Get this token in your NEXT JS with url 'http://your-domain.com/csrf'
  def get_csrf_token(requests):
    get_token(requests)
    return JsonResponse({})
  ```
- Create a function in your Next JS _App.tsx to get the CSRF Token:
  ```
  # client/src/pages/_app.tsx
  async function getCSRF() {
  const data = await fetch("http://your-domain.com/csrf", {
    credentials: "include",
  });
  return data;
  }
  ```
- In every POST request, make sure you put your CSRF Token:
  ```
  # client/src/pages/signup.tsx
  import axios from "axios";

  async function your_function() {
     axios({
      method: "post",
      data: { your_data: "your_data" },
      url: "your_url",
      xsrfCookieName: "csrftoken",
      xsrfHeaderName: "X-CSRFTOKEN",
      withCredentials: true,
    });
  }
  ```

### 5. Run Backend
```
# open new terminal
$ cd server
$ python3 manage.py runserver
```

### 6. Run Frontend

```
# open new terminal
$ cd client
$ npm run dev
```

## Further Information or Getting any Error, contact me here:
- Linkedin: [linkedin.com/in/mfadlika]
- Github: [github.com/mfadlika]