import { Controller, Delete, Body, Get, Post, Query } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

let KeyValue: Map<String, String> = new Map();

class AppendBody{
  @ApiProperty()
  key: string
  @ApiProperty()
  value: string
}

class ReadOrDeleteBody{
  @ApiProperty()
  key: string
}

@Controller('/prefab')
@ApiTags('Prefab')
export class PrefabController {

  @Post('/append')
  async append(@Body() body: AppendBody) {
    if(KeyValue.size > 200) return;
    KeyValue.set(body.key, body.value);
    return {"message":`successfully added: ${body.key}, ${body.value}`}
  }

  @Post('/read')
  async get(@Body() body: ReadOrDeleteBody) {
    return KeyValue.get(body.key)
  }

  @Delete('/delete')
  async delete(@Body() body: ReadOrDeleteBody) {
    if(KeyValue.delete(body.key)) return { "message":`successfully removed item with key: ${body.key}` }
  }
}
