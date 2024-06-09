// ApresentacaoStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 15, 
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  local: {
    fontSize: 16,
    marginBottom: 10,
  },
  descricao: {
    fontSize: 18,
    textAlign: 'justify', 
    paddingHorizontal: 10, 
    marginBottom: 20, 
    lineHeight: 24, 
  },
  botao: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
