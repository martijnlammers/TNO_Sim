import { Controller, Delete, Body, Get, Post, Query } from '@nestjs/common';
import { ApiProperty, ApiTags, ApiOperation } from '@nestjs/swagger';

let KeyValue: Map<String, String> = new Map();

class AppendBody{
  @ApiProperty({
    required: true,
    description: 'Key to find item.',
    example: "arbitrarykey123",
    type: String
})
  key: string
  @ApiProperty({
    required: true,
    description: 'Value to store in RAM, can be complex structures, as long as it is in string format.',
    example: `{ 'Hello':'World' }`,
    type: String
})
  value: string
}

class ReadOrDeleteBody{
  @ApiProperty({
    required: true,
    description: 'Key to find item.',
    example: "arbitrarykey123",
    type: String
})
  key: string
}

@Controller('/prefab')
@ApiTags('Prefab')
export class PrefabController {

  @Post('/append')
  @ApiOperation({ summary: 'Set an item in key-value map. Disclaimer, this is stored in volatile memory. (RAM) Max 200 entries.' })
  async append(@Body() body: AppendBody) {
    if(KeyValue.size > 200) return;
    KeyValue.set(body.key, body.value);
    return {"message":`successfully added: ${body.key}, ${body.value}`}
  }

  @Post('/read')
  @ApiOperation({ summary: 'Read an item from key-value map. Setting thesame key will overwrite it.' })
  async get(@Body() body: ReadOrDeleteBody) {
    return {"key":`${body.key}`, "value":`${KeyValue.get(body.key)}`};
  }

  @Delete('/delete')
  @ApiOperation({ summary: 'Delete an item from key-value map.' })
  async delete(@Body() body: ReadOrDeleteBody) {
    if(KeyValue.delete(body.key)) return { "message":`successfully removed item with key: ${body.key}` }
  }
}
