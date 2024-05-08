/**
* @swagger
* definitions:
*   carnes:
*     type: object
*     properties:
*       id_evento:
*         type: integer
*       tipo_carne:
*         type: string
*       quant_carne:
*         type: integer


* /carne:
*   post:
*     tags:
*     - Carnes
*     description: Cadastra carnes
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/definitions/carnes'   
*     responces:
*       200:
*         description: carne cadastrada
*       400:
*         description: Erro
*   get:
*     tags:
*     - Carnes
*     description: Retorna um carnes
*     responses:
*       200:
*         description: tras carne
*       400:
*         description: Erro

* /carne/{id}:

*   put:
*     tags:
*     - Carnes
*     description: modifica carne
*     parameters:
*       - name: id
*         in: path
*         description: id da carne desejada
*         required: true
*         type: string
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/definitions/carnes'   
*     responces:
*       200:
*         description: carne modificada
*       400:
*         description: Erro


*   delete:
*     tags:
*     - Carnes
*     description: Exclui carne
*     parameters:
*       - name: id
*         in: path
*         description: id da carne desejada
*         required: true
*         type: string
*     responces:
*       200:
*         description: Carne excluida
*       400:
*         description: Erro

*/