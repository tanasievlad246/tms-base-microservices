import { Router } from 'express';
import { container, types } from '../container';
import { AddressController } from '../controllers/address';

const router = Router();
const addressController = container.get<AddressController>(AddressController);

router.get('/address', addressController.getAddress);

router.post('/address', addressController.createAddress);

export default router;
