// import { Button, Form } from "react-bootstrap";
// function Formulario({
//   botao,
//   eventoTeclado,
//   cadastrar,
//   obj,
//   cancelar,
//   alterar,
//   remover,
// }) {
//   return (
//     <form>
//       <input
//         type="text"
//         value={obj.nome}
//         onChange={eventoTeclado}
//         name="nome"
//         placeholder="Nome"
//         className="form-control"
//       />
//       <input
//         type="number"
//         value={obj.preco}
//         onChange={eventoTeclado}
//         name="preco"
//         placeholder="Preço"
//         className="form-control"
//       />
//       <input
//         type="text"
//         value={obj.marca}
//         onChange={eventoTeclado}
//         name="marca"
//         placeholder="Marca"
//         className="form-control"
//       />
//       <textarea
//         onChange={eventoTeclado}
//         value={obj.descricao}
//         name="descricao"
//         placeholder="Descrição"
//         className="form-control"
//       />

//       {botao ? (
//         <input
//           type="button"
//           value="Cadastrar"
//           onClick={cadastrar}
//           className="btn btn-primary"
//         />
//       ) : (
//         <div>
//           <input
//             type="button"
//             onClick={alterar}
//             value="Alterar"
//             className="btn btn-warning"
//           />
//           <input
//             type="button"
//             value="Remover"
//             onClick={remover}
//             className="btn btn-danger"
//           />
//           <input
//             type="button"
//             value="Cancelar"
//             onClick={cancelar}
//             className="btn btn-secondary"
//           />
//         </div>
//       )}
//     </form>
//   );
// }
// export default Formulario;

import { Button, Form } from "react-bootstrap";

function Formulario({
  botao,
  eventoTeclado,
  cadastrar,
  obj,
  cancelar,
  alterar,
  remover,
}) {
  return (
    <Form>
      <Form.Group className="mb-2">
        <Form.Control
          type="text"
          value={obj.nome}
          onChange={eventoTeclado}
          name="nome"
          placeholder="Nome"
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Control
          type="number"
          value={obj.preco}
          onChange={eventoTeclado}
          name="preco"
          placeholder="Preço"
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Control
          type="text"
          value={obj.marca}
          onChange={eventoTeclado}
          name="marca"
          placeholder="Marca"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          rows={2}
          value={obj.descricao}
          onChange={eventoTeclado}
          name="descricao"
          placeholder="Descrição"
        />
      </Form.Group>

      {botao ? (
        <Button variant="primary" onClick={cadastrar} className="w-100">
          Cadastrar
        </Button>
      ) : (
        <div className="d-flex justify-content-between gap-2">
          <Button variant="warning" onClick={alterar} className="flex-fill">
            Alterar
          </Button>
          <Button variant="danger" onClick={remover} className="flex-fill">
            Remover
          </Button>
          <Button variant="secondary" onClick={cancelar} className="flex-fill">
            Cancelar
          </Button>
        </div>
      )}
    </Form>
  );
}

export default Formulario;
