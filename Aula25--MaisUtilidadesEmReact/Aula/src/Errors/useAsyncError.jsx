/* 
  Custom Hook: Componente funcional genérico que possibilita tratar erros/exceções assíncronas ao utilizar o ErrorBoundary
*/
import { useState, useCallback } from "react";

const useAsyncError = function () {

  /// Definimos a função de atualização do estado do erro
  const [_, setError] = useState();

  /// Utilizamos o useCallback pra garantir que não vai re-rendeirzar a todo momento, apenas quando necessário
  const handleAsyncError = useCallback(function (e) {
    setError(function () {
      throw e;
    });
  }, [setError]); /// Será executado, apenas quando useAsyncError for chamado.

  return handleAsyncError;
};

export default useAsyncError;