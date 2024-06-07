import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { BotonCalc } from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  
  // Se desestructuran las funcines y variables probenientes del custom hook
  const { 
    numeroAnterior,
    numero,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular, 
  } = useCalculadora();

  return (
    <View style={ styles.calculadoraContainer }>
      {
        ( numeroAnterior !== '0' ) && (
          <Text style={ styles.resultadoPequeno }>{numeroAnterior}</Text>
        )
      }
      <Text 
        style={ styles.resultado }
        numberOfLines={ 1 }
        adjustsFontSizeToFit
      >
        {numero}
      </Text>

      {/* Fila de Botones 1 */}
      <View style={ styles.fila }>
        <BotonCalc texto="C" color="#9b9b9b" action={ limpiar } />
        <BotonCalc texto="+/-" color="#9b9b9b" action={ positivoNegativo } />
        <BotonCalc texto="del" color="#9b9b9b" action={ btnDelete } />
        <BotonCalc texto="/" color="#ff9427" action={ btnDividir } />
      </View>

      {/* Fila de Botones 2 */}
      <View style={ styles.fila }>
        <BotonCalc texto="7" action={ armarNumero } />
        <BotonCalc texto="8" action={ armarNumero } />
        <BotonCalc texto="9" action={ armarNumero } />
        <BotonCalc texto="X" color="#ff9427" action={ btnMultiplicar } />
      </View>

      {/* Fila de Botones 3 */}
      <View style={ styles.fila }>
        <BotonCalc texto="4" action={ armarNumero } />
        <BotonCalc texto="5" action={ armarNumero } />
        <BotonCalc texto="6" action={ armarNumero } />
        <BotonCalc texto="-" color="#ff9427" action={ btnRestar } />
      </View>

      {/* Fila de Botones 4 */}
      <View style={ styles.fila }>
        <BotonCalc texto="1" action={ armarNumero } />
        <BotonCalc texto="2" action={ armarNumero } />
        <BotonCalc texto="3" action={ armarNumero } />
        <BotonCalc texto="+" color="#ff9427" action={ btnSumar } />
      </View>

      {/* Fila de Botones 5 */}
      <View style={ styles.fila }>
        <BotonCalc texto="0" ancho action={ armarNumero } />
        <BotonCalc texto="." action={ armarNumero } />
        <BotonCalc texto="=" color="#ff9427" action={ calcular } />
      </View>
    </View>
  )
}

