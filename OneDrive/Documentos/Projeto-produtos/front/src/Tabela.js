//

import { Button, Table } from "react-bootstrap";

function Tabela({ vetor, selecionar }) {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Marca</th>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {vetor.length > 0 ? (
          vetor.map((obj, indice) => (
            <tr key={indice}>
              <td>{indice + 1}</td>
              <td>{obj.nome}</td>
              <td>R$ {Number(obj.preco).toFixed(2)}</td>
              <td>{obj.marca}</td>
              <td>{obj.descricao}</td>
              <td>
                <Button
                  variant="success"
                  className="w-100"
                  onClick={() => selecionar(indice)}
                  translate="no"
                >
                  Selecionar
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6" className="text-center text-muted">
              Nenhum produto cadastrado
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default Tabela;
