import { Resolver, Query } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity';

@Resolver(() => Pet) // of => Pet
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query(() => [Pet]) // returns => [Pet]
  pets(): Promise<Pet[]> {
    return this.petsService.findAll();
  }
}
