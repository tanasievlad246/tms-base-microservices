import { CreateParcelDto } from './dto/create-parcel.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';
export declare class ParcelService {
    create(createParcelDto: CreateParcelDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateParcelDto: UpdateParcelDto): string;
    remove(id: number): string;
}
