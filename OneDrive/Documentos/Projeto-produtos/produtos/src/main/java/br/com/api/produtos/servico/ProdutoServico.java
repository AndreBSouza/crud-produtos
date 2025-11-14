package br.com.api.produtos.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import br.com.api.produtos.repositorio.ProdutoRepositorio;
import br.com.api.produtos.modelo.ProdutoModelo;
import java.lang.Iterable;
import br.com.api.produtos.modelo.RespostaModelo;

@Service
public class ProdutoServico {

  @Autowired
  private ProdutoRepositorio pr;

  @Autowired
  private RespostaModelo rm;

  // listar produtos
  public Iterable<ProdutoModelo> listar() {
    return pr.findAll();
  }

  //cadastrar ou alterar produtos
  public ResponseEntity<?> cadastrarAlterar(ProdutoModelo pm, String acao) {
    
    if(pm.getNome().equals("")){
      rm.setMensagem("O nome do produto é obrigatório!");
      return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
    }else if(pm.getMarca().equals("")){
      rm.setMensagem("A marca do produto é obrigatória!");
      return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
  } else if(pm.getPreco() == null){
      rm.setMensagem("O preço do produto é obrigatório!");
      return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
    } else {
      if(acao.equals("cadastrar")){
        return new ResponseEntity<ProdutoModelo>(pr.save(pm), HttpStatus.CREATED);
      } else {
        return new ResponseEntity<ProdutoModelo>(pr.save(pm), HttpStatus.OK);
      }
    }
 }

 //remover produtos
 public ResponseEntity<RespostaModelo> remover(long id) {
    pr.deleteById(id);
    rm.setMensagem("Produto removido com sucesso!");
    return new ResponseEntity<RespostaModelo>(rm, HttpStatus.OK);
  }

}
