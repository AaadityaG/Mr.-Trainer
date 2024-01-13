import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
    console.log(exerciseDetail);

  
    const extraDetail = [
      {
        icon: BodyPartImage,
        name: bodyPart,
      },
      {
        icon: TargetImage,
        name: target,
      },
      {
        icon: EquipmentImage,
        name: equipment,
      },
    ];
  
    return (
      <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
          <Typography sx={{ fontSize: { lg: '50px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
            {name}
          </Typography>
          <Typography sx={{ fontSize: { lg: '20px', xs: '18px' } }} color="#ffcdcd">
            Exercises keep you strong.{' '}
            <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
            of the best <br /> exercises to target your {target}. It will help you improve your{' '}
            <br /> mood and gain energy.
          </Typography>
          {extraDetail?.map((item) => (
            <Stack key={item.name} direction="row" gap="24px" alignItems="center">
              <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '60px', height: '60px' }}>
                <img src={item.icon} alt={bodyPart} style={{ width: '40px', height: '40px' }} />
              </Button>
              <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    );
  };
  
  export default Detail;