/**
* @swagger
* definitions:
*   participantes:
*     type: object
*     properties:
*       id_evento:
*         type: integer
*       quant_homem:
*         type: integer
*       quant_mulher:
*         type: integer
*       quant_criancas:
*         type: integer

* /participantes:
*   post:
*     tags:
*     - Participantes
*     description: Cria novos participantes
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/definitions/participantes'
*     responses:
*       200:
*         description: Participantes cadastrados
*       400:
*         description: Erro ao cadastrar participantes
*   get:
*     tags:
*     - Participantes
*     description: Lista um participante
*     responces:
*       400:
*         description: Erro ao listar participante


* /participantes/{id}:


*   put:
*     tags:
*     - Participantes
*     description: Atualiza um participante
*     parameters:
*       - name: id
*         in: path
*         description: id dos participantes desejado
*         required: true
*         type: string
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/definitions/participantes'
*     responses:
*       200:
*         description: Participantes modificados
*       400:
*         description: Erro ao modificar participantes


*   delete:
*     tags:
*     - Participantes
*     description: Exclui participantes
*     parameters:
*       - name: id
*         in: path
*         description: id dos participantes desejado
*         required: true
*         type: string
*     responces:
*       400:
*         descripion: Participantes deletado
*/