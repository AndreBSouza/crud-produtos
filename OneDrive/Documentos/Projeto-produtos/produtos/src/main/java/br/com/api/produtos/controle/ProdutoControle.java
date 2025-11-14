package br.com.api.produtos.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.produtos.servico.ProdutoServico;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.lang.Iterable;

import org.springframework.web.bind.annotation.RequestBody;

import br.com.api.produtos.modelo.ProdutoModelo;
import br.com.api.produtos.modelo.RespostaModelo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin(origins = "*")
public class ProdutoControle {

  @Autowired
  private ProdutoServico ps;

  @DeleteMapping("/remover/{id}")
  public ResponseEntity<RespostaModelo> remover(@PathVariable long id) {
    return ps.remover(id);

  }

  @PutMapping("/alterar")
  public ResponseEntity<?> alterar(@RequestBody ProdutoModelo pm) {
    return ps.cadastrarAlterar(pm, "alterar");
  }

  @PostMapping("/cadastrar")
  public ResponseEntity<?> cadastrar(@RequestBody ProdutoModelo pm) {
    return ps.cadastrarAlterar(pm, "cadastrar");
  }

  @GetMapping("/listar")
  public Iterable<ProdutoModelo> listar() {
    return ps.listar();

  }

}