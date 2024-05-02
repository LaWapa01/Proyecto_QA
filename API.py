from flask import Flask, request, jsonify

import psycopg2

app = Flask(__name__)


# Configuración de la conexión a la base de datos
DB_HOST = 'tu_host'
DB_PORT = 'tu_puerto'
DB_NAME = 'tu_base_de_datos'
DB_USER = 'tu_usuario'
DB_PASSWORD = 'tu_contraseña'

def execute_stored_procedure(procedure_name, *args):
    conn = psycopg2.connect(
        host=DB_HOST,
        port=DB_PORT,
        database=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD
    )
    cur = conn.cursor()
    cur.callproc(procedure_name, args)
    result = cur.fetchall()
    cur.close()
    conn.close()
    return result


@app.route('/empleados/departamento', methods=['GET'])
def get_empleados_por_departamento():
    
    #result = execute_stored_procedure('sp_obtener_empleados_por_departamento', departamento)
    print("llega departamento")
    result = [
        {
            'nombreDepartamento': 'Recursos Humanos',
            'cedula': '123456789',
            'nombre': 'Juan',
            'apellido1': 'Pérez',
            'apellido2': 'Hernández',
            'salarioBruto': 'XXXXXXX',
            'salarioNeto': 'XXXXXXX',
            'deduccionPatronal': 'XXXXXXX',
            'deduccionObrero': 'XXXXXXX',
            'deduccionRenta': 'XXXXXXX',
            'deduccionASO': 'XXXXXXX'
        },
        {
            'nombreDepartamento': 'Recursos Humanos',
            'cedula': '987654321',
            'nombre': 'María',
            'apellido1': 'Gómez',
            'apellido2': 'Salazar',
            'salarioBruto': 'XXXXXXX',
            'salarioNeto': 'XXXXXXX',
            'deduccionPatronal': 'XXXXXXX',
            'deduccionObrero': 'XXXXXXX',
            'deduccionRenta': 'XXXXXXX',
            'deduccionASO': 'XXXXXXX'
        }
       
    ]
    return result

#@app.route('/empleados/id/<id_empleado>', methods=['GET'])
@app.route('/empleados/cedula', methods=['GET'])
def get_empleado_por_id():
    
    #result = execute_stored_procedure('sp_obtener_empleado_por_id', id_empleado)
    print("llega departamento")
    result = [
        {
            'nombreDepartamento': 'Desarrollo de Frontend',
            'cedula': '117930656',
            'nombre': 'Jennifer',
            'apellido': 'Alvarado',
            'apellido2': 'Brenes',
            'salarioBruto': 'XXXXXXX',
            'salarioNeto': 'XXXXXXX',
            'deduccionPatronal': 'XXXXXXX',
            'deduccionObrero': 'XXXXXXX',
            'deduccionRenta': 'XXXXXXX',
            'deduccionASO': 'XXXXXXX'
        }
       
    ]
    return result


@app.route('/empleados/planilla', methods=['GET'])
def get_toda_planilla():
    
    #result = execute_stored_procedure('sp_obtener_toda_planilla')
    result = [
        {
            'nombreDepartamento': 'Desarrollo de Frontend',
            'cedula': '117930656',
            'nombre': 'Jennifer',
            'apellido': 'Alvarado',
            'apellido2': 'Brenes',
            'salarioBruto': 'XXXXXXX',
            'salarioNeto': 'XXXXXXX',
            'deduccionPatronal': 'XXXXXXX',
            'deduccionObrero': 'XXXXXXX',
            'deduccionRenta': 'XXXXXXX',
            'deduccionASO': 'XXXXXXX'
        },
        {
            'nombreDepartamento': 'Desarrollo de Backend',
            'cedula': '117256985',
            'nombre': 'Anthony',
            'apellido': 'Chaves',
            'apellido2': 'Achoy',
            'salarioBruto': 'XXXXXXX',
            'salarioNeto': 'XXXXXXX',
            'deduccionPatronal': 'XXXXXXX',
            'deduccionObrero': 'XXXXXXX',
            'deduccionRenta': 'XXXXXXX',
            'deduccionASO': 'XXXXXXX'
        },
        {
            'nombreDepartamento': 'Recursos Humanos',
            'cedula': '123456789',
            'nombre': 'Juan',
            'apellido1': 'Pérez',
            'apellido2': 'Hernández',
            'salarioBruto': 'XXXXXXX',
            'salarioNeto': 'XXXXXXX',
            'deduccionPatronal': 'XXXXXXX',
            'deduccionObrero': 'XXXXXXX',
            'deduccionRenta': 'XXXXXXX',
            'deduccionASO': 'XXXXXXX'
        },
        {
            'nombreDepartamento': 'Recursos Humanos',
            'cedula': '987654321',
            'nombre': 'María',
            'apellido1': 'Gómez',
            'apellido2': 'Salazar',
            'salarioBruto': 'XXXXXXX',
            'salarioNeto': 'XXXXXXX',
            'deduccionPatronal': 'XXXXXXX',
            'deduccionObrero': 'XXXXXXX',
            'deduccionRenta': 'XXXXXXX',
            'deduccionASO': 'XXXXXXX'
        }
       
    ]
    return result

#@app.route('/empleados/fecha/<fecha>', methods=['GET'])
@app.route('/empleados/quincena', methods=['GET'])
def get_empleados_por_fecha():
    
    #result = execute_stored_procedure('sp_obtener_empleados_por_fecha', fecha)
    print("llega departamento")
    result = [
        {
            'nombreDepartamento': 'Desarrollo de Frontend',
            'cedula': '117930656',
            'nombre': 'Jennifer',
            'apellido': 'Alvarado',
            'apellido2': 'Brenes',
            'salarioBruto': 'XXXXXXX',
            'salarioNeto': 'XXXXXXX',
            'deduccionPatronal': 'XXXXXXX',
            'deduccionObrero': 'XXXXXXX',
            'deduccionRenta': 'XXXXXXX',
            'deduccionASO': 'XXXXXXX'
        },
        {
            'nombreDepartamento': 'Desarrollo de Backend',
            'cedula': '117256985',
            'nombre': 'Anthony',
            'apellido': 'Chaves',
            'apellido2': 'Achoy',
            'salarioBruto': 'XXXXXXX',
            'salarioNeto': 'XXXXXXX',
            'deduccionPatronal': 'XXXXXXX',
            'deduccionObrero': 'XXXXXXX',
            'deduccionRenta': 'XXXXXXX',
            'deduccionASO': 'XXXXXXX'
        },
        {
            'nombreDepartamento': 'Recursos Humanos',
            'cedula': '123456789',
            'nombre': 'Juan',
            'apellido1': 'Pérez',
            'apellido2': 'Hernández',
            'salarioBruto': 'XXXXXXX',
            'salarioNeto': 'XXXXXXX',
            'deduccionPatronal': 'XXXXXXX',
            'deduccionObrero': 'XXXXXXX',
            'deduccionRenta': 'XXXXXXX',
            'deduccionASO': 'XXXXXXX'
        },
        {
            'nombreDepartamento': 'Recursos Humanos',
            'cedula': '987654321',
            'nombre': 'María',
            'apellido1': 'Gómez',
            'apellido2': 'Salazar',
            'salarioBruto': 'XXXXXXX',
            'salarioNeto': 'XXXXXXX',
            'deduccionPatronal': 'XXXXXXX',
            'deduccionObrero': 'XXXXXXX',
            'deduccionRenta': 'XXXXXXX',
            'deduccionASO': 'XXXXXXX'
        }
       
    ]
    return result
    #return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=7791, debug=True)
    
