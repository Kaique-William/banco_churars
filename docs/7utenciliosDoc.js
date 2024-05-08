/**
* @swagger
* definitions:
*   utencilios:
*     type: object
*     properties:
*       id_evento:
*         type: integer
*       nome_utencilio:
*         type: string
*       quant_utencilio:
*         type: integer


* /utencilios:
*   post:
*     tags:
*     - Utencilios
*     description: Cadastra utencilios
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/definitions/utencilios'   
*     responces:
*       200:
*         description: utencilios cadastrado
*       400:
*         description: Erro
*   get:
*     tags:
*     - Utencilios
*     description: Retorna um utencilios
*     responses:
*       200:
*         description: tras utencilios
*       400:
*         description: Erro

* /utencilios/{id}:

*   put:
*     tags:
*     - Utencilios
*     description: modifica utencilios
*     parameters:
*       - name: id
*         in: path
*         description: id do utencilio desejadio
*         required: true
*         type: string
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/definitions/utencilios'   
*     responces:
*       200:
*         description: utencilios modificado
*       400:
*         description: Erro


*   delete:
*     tags:
*     - Utencilios
*     description: Exclui utencilios
*     parameters:
*       - name: id
*         in: path
*         description: id do utencilios desejado
*         required: true
*         type: string
*     responces:
*       200:
*         description: utencilios excluido
*       400:
*         description: Erro

*/