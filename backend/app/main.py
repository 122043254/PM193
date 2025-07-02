from fastapi import FastAPI #importamos la clase principal
from fastapi.middleware.cors import CORSMiddleware #esto permite que otra app se conecten (React Native)
from routes import router #importamos las rutas

app = FastAPI() #creamos la app principal

# Creamos el filtro de seguridad
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Permitimos que el front se conecte
    allow_credentials=True, # Permitimos que se envien credenciales
    allow_methods=["*"], # Permitimos todos los metodos
    allow_headers=["*"], # Permitimos todos los encabezados
)

app.include_router(router) # le decimos que use todas las rutas que se encuentran en el Router creado

