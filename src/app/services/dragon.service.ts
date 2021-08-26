import { Injectable } from "@angular/core";
import { AchievementType, Dragon } from "./types";

@Injectable({
  providedIn: 'root'
})
export class DragonService {

  public getDragons(): Dragon[] {
    let dragons: Dragon[];
    dragons = [
      new Dragon(1, 'Abyss_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(2, 'Academic_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(3, 'Ace_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(4, 'Agave_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(5, 'Agent_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(6, 'Agnes_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(7, 'Algae_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(8, 'Alien_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(9, 'Aloe_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(10, 'Aloha_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(11, 'Alpine_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(12, 'Amazon_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(13, 'Amber_Dragon_Baby.png ', AchievementType.Practice),
      new Dragon(14, 'Amphibian_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(15, 'Angler_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(16, 'Ant_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(17, 'Anubis_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(18, 'Apep_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(19, 'Aphrodite_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(20, 'Apocalypse_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(21, 'Apollo_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(22, 'Aquarius_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(23, 'Aquatic_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(24, 'Arboreal_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(25, 'Arcana_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(26, 'Arcane_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(27, 'Archangel_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(28, 'Arctic_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(29, 'Ares_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(30, 'Aries_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(31, 'Armadillo_Dragon_Baby.png', AchievementType.Practice),
      new Dragon(32, 'Armored_Dragon_Baby.png', AchievementType.Play),
      new Dragon(33, 'Armory_Dragon_Baby.png', AchievementType.Play),
      new Dragon(34, 'Artemis_Dragon_Baby.png', AchievementType.Play),
      new Dragon(35, 'Artoba_Dragon_Baby.png', AchievementType.Play),
      new Dragon(36, 'Ashkelon_Dragon_Baby.png', AchievementType.Play),
      new Dragon(37, 'Ash_Dragon_Baby.png', AchievementType.Play),
      new Dragon(38, 'Assassin_Dragon_Baby.png', AchievementType.Play),
      new Dragon(39, 'Asteroid_Dragon_Baby.png', AchievementType.Play),
      new Dragon(40, 'Astrologist_Dragon_Baby.png', AchievementType.Play),
      new Dragon(41, 'Astronaut_Dragon_Baby.png', AchievementType.Play),
      new Dragon(42, 'Aurora_Dragon_Baby.png', AchievementType.Play),
      new Dragon(43, 'Autumn_Dragon_Baby.png', AchievementType.Play),
      new Dragon(44, 'Avocado_Dragon_Baby.png', AchievementType.Play),
      new Dragon(45, 'Balloon_Dragon_Baby.png', AchievementType.Play),
      new Dragon(46, 'Bamboo_Dragon_Baby.png', AchievementType.Play),
      new Dragon(47, 'Banana_Dragon_Baby.png', AchievementType.Play),
      new Dragon(48, 'Bee_Dragon_Baby.png', AchievementType.Play),
      new Dragon(49, 'Bell_Dragon_Baby.png', AchievementType.Play),
      new Dragon(50, 'Berry_Dragon_Baby.png', AchievementType.Play),
      new Dragon(51, 'Blackberry_Dragon_Baby.png', AchievementType.Play),
      new Dragon(52, 'Black_Hole_Dragon_Baby.png', AchievementType.Play),
      new Dragon(53, 'Blossom_Dragon_Baby.png', AchievementType.Play),
      new Dragon(54, 'Bonsai_Dragon_Baby.png', AchievementType.Play),
      new Dragon(55, 'Boxer_Dragon_Baby.png', AchievementType.Play),
      new Dragon(56, 'Box_Dragon_Baby.png', AchievementType.Play),
      new Dragon(57, 'Bronze_Dragon_Baby.png', AchievementType.Play),
      new Dragon(58, 'Bubble_Dragon_Baby.png', AchievementType.Play),
      new Dragon(59, 'Burger_Dragon_Baby.png', AchievementType.Play),
      new Dragon(60, 'Butterfly_Dragon_Baby.png', AchievementType.Play),
      new Dragon(61, 'Cappuccino_Dragon_Baby.png', AchievementType.Play),
      new Dragon(62, 'Caterpillar_Dragon_Baby.png', AchievementType.Play),
      new Dragon(63, 'Chameleon_Dragon_Baby.png', AchievementType.Play),
      new Dragon(64, 'Chef_Dragon_Baby.png', AchievementType.Play),
      new Dragon(65, 'Cinnamon_Dragon_Baby.png', AchievementType.Play),
      new Dragon(66, 'Circus_Dragon_Baby.png', AchievementType.Play),
      new Dragon(67, 'Classical_Dragon_Baby.png', AchievementType.Play),
      new Dragon(68, 'Cloud_Dragon_Baby.png', AchievementType.Play),
      new Dragon(69, 'Clover_Dragon_Baby.png', AchievementType.Play),
      new Dragon(70, 'Clownfish_Dragon_Baby.png', AchievementType.Play),
      new Dragon(71, 'Coconut_Dragon_Baby.png', AchievementType.Play),
      new Dragon(72, 'Crystal_Dragon_Baby.png', AchievementType.Play),
      new Dragon(73, 'Disco_Ball_Dragon_Baby.png', AchievementType.Play),
      new Dragon(74, 'Dracula_Dragon_Baby.png', AchievementType.Play),
      new Dragon(75, 'Dust_Dragon_Baby.png', AchievementType.Play),
      new Dragon(76, 'Eel_Dragon_Baby.png', AchievementType.Play),
      new Dragon(77, 'Elephant_Dragon_Baby.png', AchievementType.Play),
      new Dragon(78, 'Emerald_Dragon_Baby.png', AchievementType.Play),
      new Dragon(79, 'Energy_Dragon_Baby.png', AchievementType.Play),
      new Dragon(80, 'Fairy_Dust_Dragon_Baby.png', AchievementType.Play),
      new Dragon(81, 'Farmer_Dragon_Baby.png', AchievementType.Play),
      new Dragon(82, 'Flame_Lily_Dragon_Baby.png', AchievementType.Play),
      new Dragon(83, 'Fluffy_Dragon_Baby.png', AchievementType.Play),
      new Dragon(84, 'Fossil_Dragon_Baby.png', AchievementType.Play),
      new Dragon(85, 'Frosty_Dragon_Baby.png', AchievementType.Play),
      new Dragon(86, 'Galaxy_Dragon_Baby.png', AchievementType.Play),
      new Dragon(87, 'Genie_Dragon_Baby.png', AchievementType.Play),
      new Dragon(88, 'Gladiator_Dragon_Baby.png', AchievementType.Play),
      new Dragon(89, 'Goblin_Dragon_Baby.png', AchievementType.Play),
      new Dragon(90, 'Hellfire_Dragon_Baby.png', AchievementType.Play),
      new Dragon(91, 'Heroic_Dragon_Baby.png', AchievementType.Play),
      new Dragon(92, 'Hippie_Dragon_Baby.png', AchievementType.Play),
      new Dragon(93, 'Ice_Dragon_Baby.png', AchievementType.Play),
      new Dragon(94, 'Ivory_Dragon_Baby.png', AchievementType.Play),
      new Dragon(95, 'Jellyfish_Dragon_Baby.png', AchievementType.Play),
      new Dragon(96, 'Kangaroo_Dragon_Baby.png', AchievementType.Play),
      new Dragon(97, 'Kitty_Dragon_Baby.png', AchievementType.Play),
      new Dragon(98, 'Ladybug_Dragon_Baby.png', AchievementType.Play),
      new Dragon(99, 'Laser_Hammer_Dragon_Baby.png', AchievementType.Play),
      new Dragon(100, 'Lava_Dragon_Baby.png', AchievementType.Play),
      new Dragon(101, 'Leaf_Dragon_Baby.png', AchievementType.Play),
      new Dragon(102, 'Leopard_Dragon_Baby.png', AchievementType.Play),
      new Dragon(103, "Li'l_Angel_Dragon_Baby.png", AchievementType.Play),
      new Dragon(104, 'Liberty_Dragon_Baby.png', AchievementType.Play),
      new Dragon(105, 'Love_Dragon_Baby.png', AchievementType.Play),
      new Dragon(106, 'Machine_Dragon_Baby.png', AchievementType.Play),
      new Dragon(107, 'Magnet_Dragon_Baby.png', AchievementType.Play),
      new Dragon(108, 'Merchant_Dragon_Baby.png', AchievementType.Play),
      new Dragon(109, 'Monk_Dragon_Baby.png', AchievementType.Play),
      new Dragon(110, 'Mosaic_Dragon_Baby.png', AchievementType.Play),
      new Dragon(111, 'Ninja_Dragon_Baby.png', AchievementType.Play),
      new Dragon(112, 'Orange_Dragon_Baby.png', AchievementType.Play),
      new Dragon(113, 'Orchid_Dragon_Baby.png', AchievementType.Play),
      new Dragon(114, 'Owl_Dragon_Baby.png', AchievementType.Play),
      new Dragon(115, 'Palette_Dragon_Baby.png', AchievementType.Play),
      new Dragon(116, 'Panda_Dragon_Baby.png', AchievementType.Play),
      new Dragon(117, 'Pharaoh_Dragon_Baby.png', AchievementType.Play),
      new Dragon(118, 'Piggy_Bank_Dragon_Baby.png', AchievementType.Play),
      new Dragon(119, 'Pirate_Dragon_Baby.png', AchievementType.Play),
      new Dragon(120, 'Planet_Dragon_Baby.png', AchievementType.Play),
      new Dragon(121, 'Pumpkin_Dragon_Baby.png', AchievementType.Play),
      new Dragon(122, 'Rocker_Dragon_Baby.png', AchievementType.Play),
      new Dragon(123, 'Skeleton_Dragon_Baby.png', AchievementType.Play),
      new Dragon(124, 'Tiger_Dragon_Baby.png', AchievementType.Play),
      new Dragon(125, 'Tsunami_Dragon_Baby.png', AchievementType.Play),
      new Dragon(126, 'Yin_Yang_Dragon_Baby.png', AchievementType.Play),
      new Dragon(127, 'Zombie_Dragon_Baby.png', AchievementType.Play)
    ];
    return dragons;
  }
}
