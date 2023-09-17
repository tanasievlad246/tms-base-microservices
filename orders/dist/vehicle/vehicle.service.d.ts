import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
export declare class VehicleService {
    create(createVehicleDto: CreateVehicleDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateVehicleDto: UpdateVehicleDto): string;
    remove(id: number): string;
}
