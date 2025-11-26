import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Chip, 
  Box,
  CardActionArea 
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const MenuItem = ({ item }) => {
  return (
    <Card 
      sx={{ 
        width: '100%',
        height: '100%',
        minHeight: '420px',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 24px rgba(255, 107, 53, 0.3)',
        },
      }}
    >
      <CardActionArea 
        component={Link} 
        to={`/meals/${item.id}`}
        sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
      >
        <CardMedia
          component="img"
          height="200"
          image={item.thumb}
          alt={item.name}
          sx={{ objectFit: 'cover', flexShrink: 0 }}
        />
        
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography 
            variant="h6" 
            component="h3" 
            gutterBottom
            sx={{ 
              fontWeight: 600,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              minHeight: '3.6em',
            }}
          >
            {item.name}
          </Typography>
          
          <Chip 
            label={item.category} 
            size="small" 
            sx={{ 
              mb: 2,
              alignSelf: 'flex-start',
              backgroundColor: 'rgba(255, 107, 53, 0.15)',
              color: '#ff8c61',
              fontWeight: 500,
            }} 
          />
          
          <Box 
            sx={{ 
              mt: 'auto',
              pt: 2,
              borderTop: '1px solid rgba(255, 107, 53, 0.2)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#ff6b35',
                fontWeight: 700,
              }}
            >
              {item.price}€
            </Typography>
            
            <Box 
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                color: '#ff6b35',
                gap: 0.5,
                fontWeight: 500,
              }}
            >
              Ver Detalles
              <ArrowForward fontSize="small" />
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MenuItem;