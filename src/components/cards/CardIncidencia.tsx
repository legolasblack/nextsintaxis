'use client'

import React from 'react'
import { useState } from 'react';
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";


type Props = {}



export default function CardIncidencia({}: Props) {

    const [isFollowed, setIsFollowed] = useState(false);


  return (
    <Card className="max-w-[340px] mt-5 h-auto">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Suc. Mazatlan</h4>
            <h5 className="text-small tracking-tight text-default-400">@Gua-337615</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 pt-2 text-small text-default-400">
        <p className='text-lg text-black'>
            Motivo incidencia:
        </p>
        <p className='text-black'>
            Mercancia mal etiquetada
        </p>
        <p>
          LLega mercancia mal etiquetada e incompleta, favor de revizar
          el numero de piezas antes de proceder a entrega de cliente 
        </p>
        <span className="pt-2">
          #Mazatlan
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
        <span className="pt-2">
          #Culiacan 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
        <span className="pt-2">
          #Guadalajara
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className="text-default-400 text-small">Views</p>
          <a href="">
          <p className="text-default-400 text-small ml-auto text-blue-500">Chat</p>
          </a>
        </div>
      </CardFooter>
    </Card>
  )
}