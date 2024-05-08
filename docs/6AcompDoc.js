/**
* @swagger
* definitions:
*   acomp:
*     type: object
*     properties:
*       id_evento:
*         type: integer
*       arroz:
*         type: integer
*       farofa:
*         type: integer
*       pao:
*         type: integer
*       acomp_adic:
*         type: integer


* /acomp:
*   post:
*     tags:
*     - Acompanhamento
*     description: Cadastra Acompanhamento
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/definitions/acomp'   
*     responces:
*       200:
*         description: Acompanhamento cadastrado
*       400:
*         description: Erro
*   get:
*     tags:
*     - Acompanhamento
*     description: Retorna um Acompanhamento
*     responses:
*       200:
*         description: tras Acompanhamento
*       400:
*         description: Erro


* /acomp/{id}:

*   put:
*     tags:
*     - Acompanhamento
*     description: modifica Acompanhamento
*     parameters:
*       - name: id
*         in: path
*         description: id do Acompanhamento desejado
*         required: true
*         type: string
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/definitions/acomop'   
*     responces:
*       200:
*         description: Acompanhamento modificado
*       400:
*         description: Erro


*   delete:
*     tags:
*     - Acompanhamento
*     description: Exclui Acompanhamento
*     parameters:
*       - name: id
*         in: path
*         description: id do Acompanhamento desejado
*         required: true
*         type: string
*     responces:
*       200:
*         description: Acompanhamento excluido
*       400:
*         description: Erro

*/