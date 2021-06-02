export const getOnePlace = async (id) => {
    const response = await fetch(`${process.env.BASE_URL}/places/${id}`);
    if (response.ok) {
        const result = await response.json();
        const resultArr = [result];
        console.log(resultArr);
        return resultArr.map(
            ({
                price_per_night,
                image_thumbnail,
                max_guests,
                pet_friendly,
                ...place
            }) => ({
                ...place,
                pricePerNight: price_per_night,
                imageThumbnail: image_thumbnail,
                maxGuests: max_guests,
                petFriendly: pet_friendly,
            })
        );
    } else {
        throw new Error(await response.json());
    }
};
