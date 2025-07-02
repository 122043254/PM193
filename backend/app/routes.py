from fastapi import APIRouter #sistema de rutas
from data import nombres #importamos la base de datos

router = APIRouter() #creamos un onjeto para definir las rutas

@router.get("/nombres") #definimos la ruta GET llamada nombres
def get_nombres(): # esta funcion se ejecuta cuando alguien usa el /nombres
    return nombres #devolvemos la lista de los nombres

# Sirve como buena practica para seccionar bien las rutas que tenemos y asi no amontonar todo en el main


