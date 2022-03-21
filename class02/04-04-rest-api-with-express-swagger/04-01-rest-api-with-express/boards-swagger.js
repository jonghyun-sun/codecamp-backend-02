/**
 * @swagger
 * /:
 *   get:
 *      summary: 게시글 가져오기
 *      tag: [Board]:
 *      parameters:
 *          - in:query
 *            name: number
 *            type: int
 *      responses:
 *          200:
 *              description: 성공
 *              content:
 *                  appliction/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              properties:
 *                                  number:
 *                                      type: int
 *                                      example: 2
 *                                  writer:
 *                                      type: string
 *                                      example: 철수
 *                                  title:
 *                                      type: string
 *                                      example: 제목입니다~~
 *                                  contents:
 *                                      type: string
 *                                      example: 내용입니다!!
 * 
 */
 
/**
 * @swagger
 * /:
 *   get:
 *      summary: 게시글 가져오기
 *      tag: [Board]:
 *      parameters:
 *          - in:query
 *            name: number
 *            type: int
 *      response:
 *          200:
 *              description: 성공
 *              content:
 *                  appliction/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              properties:
 *                                  number:
 *                                      type: int
 *                                      example: 2
 *                                  writer:
 *                                      type: string
 *                                      example: 철수
 *                                  title:
 *                                      type: string
 *                                      example: 제목입니다~~
 *                                  contents:
 *                                      type: string
 *                                      example: 내용입니다!!
 */
   
 /* 
 * 
 * 
 * 
 
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */