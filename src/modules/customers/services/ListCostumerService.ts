import { getCustomRepository } from 'typeorm';
import Customer from '../typeorm/entities/Customer';
import CustomersRepository from '../typeorm/repositories/CustomersRepository';

export default class ListCostumerService {
  public async execute(): Promise<Customer[]> {
    const costumersRepository = getCustomRepository(CustomersRepository);

    const costumers = costumersRepository.find();

    return costumers;
  }
}
