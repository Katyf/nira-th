import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  Icon,
  IconSize,
  Tag,
} from "@blueprintjs/core";
import { formatCurrency } from "../utils";

interface BusInformationDialogProps {
  bus_id: string;
  voltage: number;
  owner: string;
  latitude: number;
  longitude: number;
  bus_name: string;
  mw_energy: number;
  mw_capacity: number;
  allocated_cost: number;
  total_cost: number;
  number_constraints: number;
}

export const BusInformationDialog = (props: BusInformationDialogProps) => {
  const {
    bus_id,
    voltage,
    owner,
    latitude,
    longitude,
    bus_name,
    mw_energy,
    mw_capacity,
    allocated_cost,
    total_cost,
    number_constraints,
  } = props;

  const iconColor =
    mw_energy <= 20 ? "#FA999C" : mw_energy <= 100 ? "#FBB360" : "#72CA9B";

  const handleClose = () => {};

  return (
    <Dialog isOpen className="bus-dialog">
      <DialogBody>
        <div className="bus-dialog--header">
          <Icon icon="ring" size={IconSize.LARGE} color={iconColor} />
          <div className="bus-dialog--header-title-container">
            <div className="bus-dialog--header-title">
              <h5 className="bp4-heading">{bus_name}</h5>
              <Button
                icon="cross"
                color="#5f6b7c"
                minimal
                small
                onClick={handleClose}
              />
            </div>
            <Tag round>{mw_energy} MWE</Tag>
            <span className="bp4-tag bp4-intent-primary bp4-round">
              {mw_capacity} MWC
            </span>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Triggered constraints</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bp4-text-disabled">Allocated cost</td>
              <td>{formatCurrency(allocated_cost)}</td>
            </tr>
            <tr>
              <td className="bp4-text-disabled">Total cost</td>
              <td>{formatCurrency(total_cost)}</td>
            </tr>
            <tr>
              <td className="bp4-text-disabled">Number of constraints</td>
              <td>{number_constraints} constraints</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>Bus details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bp4-text-disabled">Bus ID</td>
              <td>{bus_id}</td>
            </tr>
            <tr>
              <td className="bp4-text-disabled">Voltage</td>
              <td>{voltage}</td>
            </tr>
            <tr>
              <td className="bp4-text-disabled">Owner</td>
              <td>{owner}</td>
            </tr>
            <tr>
              <td className="bp4-text-disabled">Coordinates</td>
              <td>
                ({latitude}, {longitude})
              </td>
            </tr>
          </tbody>
        </table>
      </DialogBody>
    </Dialog>
  );
};
