/**
* @swagger
* definitions:
*   cortes:
*     type: object
*     properties:
*       id_evento:
*         type: integer
*       nome_corte:
*         type: string
*       quant:
*         type: integer


* /cortes:
*   post:
*     tags:
*     - Cortes
*     description: Cadastra cortes de carne
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/definitions/cortes'   
*     responces:
*       200:
*         description: cortes cadastrado
*       400:
*         description: Erro
*   get:
*     tags:
*     - Cortes
*     description: Retorna um Corte
*     responses:
*       200:
*         description: tras Cortes
*       400:
*         description: Erro


* /cortes/{id}:

*   put:
*     tags:
*     - Cortes
*     description: modifica Cortes
*     parameters:
*       - name: id
*         in: path
*         description: id do Cortes desejado
*         required: true
*         type: string
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/definitions/Cortes'   
*     responces:
*       200:
*         description: carne modificada
*       400:
*         description: Erro


*   delete:
*     tags:
*     - Cortes
*     description: Exclui Cortes
*     parameters:
*       - name: id
*         in: path
*         description: id do Cortes desejado
*         required: true
*         type: string
*     responces:
*       200:
*         description: Cortes excluida
*       400:
*         description: Erro

*/