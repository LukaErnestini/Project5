import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  create(createItemDto: CreateItemDto) {
    return this.prisma.item.create({
      data: {
        name: createItemDto.name,
        info: createItemDto.info,
        datePurchased: new Date(createItemDto.datePurchased),
        warranty: createItemDto.warranty,
      },
    });
  }

  findAll() {
    return this.prisma.item.findMany();
  }

  findOne(id: number) {
    return this.prisma.item.findUnique({
      where: { id },
    });
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return this.prisma.item.update({
      where: { id },
      data: {
        name: updateItemDto.name,
        info: updateItemDto.info,
        datePurchased: updateItemDto.datePurchased
          ? new Date(updateItemDto.datePurchased)
          : undefined,
        warranty: updateItemDto.warranty,
      },
    });
  }

  remove(id: number) {
    return this.prisma.item.delete({
      where: { id },
    });
  }
}
