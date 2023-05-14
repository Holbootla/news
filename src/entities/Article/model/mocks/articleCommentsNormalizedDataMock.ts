/* eslint-disable max-len */
import { Comment } from '@/entities/Comment';

export const articleCommentsNormalizedDataMock:Record<string, Comment> = {
    1: {
        id: '1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis dignissim lorem. Aliquam id ipsum mi. Mauris et iaculis libero. Etiam id sodales sem. Cras urna elit, gravida sit amet congue eget, lacinia ac tellus. Proin eget enim egestas, volutpat metus laoreet, dignissim turpis. Vivamus odio sem, convallis id volutpat a, aliquam a mi. In metus ipsum, tincidunt eu sollicitudin ut, venenatis ut neque. Fusce malesuada urna eget varius fermentum. Vestibulum elementum sodales mattis. Quisque.',
        user: {
            id: '1',
            username: 'admin',
            avatar: 'https://avatars.githubusercontent.com/u/70381959',
        },
    },
    2: {
        id: '2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis dignissim lorem. Aliquam id ipsum mi. Mauris et iaculis libero. Etiam id sodales sem. Cras urna elit, gravida sit amet congue eget, lacinia ac tellus. Proin eget enim egestas, volutpat metus laoreet, dignissim turpis. Vivamus odio sem, convallis id volutpat a, aliquam a mi. In metus ipsum, tincidunt eu sollicitudin ut, venenatis ut neque. Fusce malesuada urna eget varius fermentum. Vestibulum elementum sodales mattis. Quisque.',
        user: {
            id: '2',
            username: 'user',
            avatar: 'https://cdn.pixabay.com/photo/2023/03/24/23/06/goat-7874883_960_720.jpg',
        },
    },
};
