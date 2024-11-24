import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  info: string;

  @ApiProperty()
  datePurchased: Date;

  @ApiProperty()
  warranty: number;
}
