/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package utilitarios;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Properties;

/**
 *
 * @author Julian
 */
public class Prueba {

    private static final String DATABASE_DRIVER = "com.mysql.jdbc.Driver";
    private static final String DATABASE_URL = "jdbc:mysql://eu-cdbr-west-01.cleardb.com/heroku_61f787cd12e01c6";
    private static final String USERNAME = "bf61db3a4c2178";
    private static final String PASSWORD = "ff378929";
    private static final String MAX_POOL = "250";

    // init connection object
    private Connection connection;
// init properties object
    private Properties properties;

    // create properties
    private Properties getProperties() {
        if (properties == null) {
            properties = new Properties();
            properties.setProperty("user", USERNAME);
            properties.setProperty("password", PASSWORD);
            properties.setProperty("MaxPooledStatements", MAX_POOL);
        }
        return properties;
    }

    public Connection connect() {
        if (connection == null) {
            try {
                Class.forName(DATABASE_DRIVER);
                connection = DriverManager.getConnection(DATABASE_URL, getProperties());
            } catch (Exception e) {
                // Java 7+
                e.printStackTrace();
            }
        }
        return connection;
    }

    // disconnect database
    public void disconnect() {
        if (connection != null) {
            try {
                connection.close();
                connection = null;
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    public int consultarEstado(String codPro) {
        int estado = 0;
        String sql = "SELECT * FROM pruebas where codprod='"+codPro+"'";
        try {
            PreparedStatement statement = connect().prepareStatement(sql);
            ResultSet rs=statement.executeQuery();
            while(rs.next()){
                estado=rs.getInt(2);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            disconnect();
        }
        return estado;
    }
    
    public int cambiarEstado(String codPro,int estado) {
        int result=0;
        String sql = "update pruebas set estado="+estado+" where codProd='"+codPro+"'" ;
        try {
            PreparedStatement statement = connect().prepareStatement(sql);
            statement.executeUpdate();
            result=1;
        } catch (Exception e) {
            result=0;
            e.printStackTrace();
        } finally {
            disconnect();
        }
        return result;
    }
}
